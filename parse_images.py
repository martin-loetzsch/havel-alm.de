import pathlib

from PIL import Image

photos_dir = pathlib.Path('./public/photos')

# output = sys.stdout
with open('./components/photos.tsx', 'w') as output:

    print('''

export default class Photo{
    constructor(public grid: string, public alt: string, public width: number, public height: number) {}
}

''', file=output)

    for path in photos_dir.glob('**/*.jpg'):
        relative_file_name = str(path)[len(str(photos_dir)) + 1:]
        variable_name = relative_file_name.replace(' ', '_').replace('.', '_').replace('/', "_")
        with Image.open(path) as image:
            print(f'''export const {variable_name} = new Photo('/photos/{relative_file_name}', '{path.stem}', {image.width}, {image.height})''',
                  file=output)
