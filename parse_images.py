import base64
import io
import pathlib

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

    for path in photos_dir.glob('**/*.jpg'):
        print(path)
        relative_file_name = str(path)[len(str(photos_dir)) + 1:]
        variable_name = relative_file_name
        for string in [' ', '.', '/', '-']:
            variable_name = variable_name.replace(string, '_')

        with Image.open(path) as image:
            width = image.width
            height = image.height

            image.thumbnail(size=(30, 30))
            image.show()

            # image = image.filter(filter=ImageFilter.BoxBlur(radius=5))
            # image.show()

            buffered = io.BytesIO()
            image.save(buffered, format="PNG")
            blurDataUrl = 'data:image/jpeg;base64,' + base64.b64encode(buffered.getvalue()).decode("utf-8")

            print(
                f'''export const {variable_name} = new Photo('/photos/{relative_file_name}', '{path.stem}', {width}, {height}, '{blurDataUrl}')''',
                file=output)
