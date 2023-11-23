import Nav from '@/components/nav/nav';
import Photo from '@/components/photo/photo';
import photos from '@/components/photos';

function NotFoundPage() {

  return (<>

    <Photo props={photos.Ansichten__Terasse_bei_Mondschein} priority={true}
      className='color-cyan' linkToPhotoPage={false}>
      <h1>Seite nicht gefunden</h1>)
    </Photo>
    <Nav verticalOffsetInVWs={20} />
  </>
  )
}

export default NotFoundPage