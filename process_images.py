import pathlib
import io
import base64

from PIL import Image

photos_dir = pathlib.Path('./public/photos')

# output = sys.stdout
with open('./components/photos.tsx', 'w') as output:

    print('''

export default class Photo{
    constructor(
        public src: string, 
        public alt: string, 
        public width: number, 
        public height: number, 
        public blurDataUrl: string) 
    {}
}

''', file=output)

    for path in photos_dir.glob('**/*.[jJ][pP][gG]'):
        print(path)
        relative_file_name = str(path)[len(str(photos_dir)) + 1:]
        variable_name = relative_file_name[:-4].translate(''.maketrans({
            ' ': '_',
            '.': '_',
            '-': '_',
            ')': '_',
            '(': '_',
            '/': '__',
            'ä': 'ae',
            'Ä': 'Ae',
            'ü': 'ue',
            'Ü': 'Ue',
            'ö': 'Oe',
            'Ö': 'Oe'
        }
))


        if variable_name[0].isdigit():
            variable_name = '_' + variable_name

        with Image.open(path) as image:
            width = image.width
            height = image.height

            image.thumbnail(size=(50, 50))
            # image.show()

            # image = image.filter(filter=ImageFilter.BoxBlur(radius=5))
            # image.show()

            buffered = io.BytesIO()
            image.save(buffered, format="PNG")
            blurDataUrl = 'data:image/jpeg;base64,' + base64.b64encode(buffered.getvalue()).decode("utf-8")

            print(
                f'''export const {variable_name} = new Photo('/photos/{relative_file_name}', '{path.stem}', {width}, {height}, '{blurDataUrl}')''',
                file=output)

