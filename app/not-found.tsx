import Nav from '@/app/components/nav/nav';
import Photo from '@/app/(photos)/photo';
import photos from '@/app/(photos)/photos';

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