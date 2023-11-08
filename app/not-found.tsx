import Card from '@/components/card/card';
import Grid from "@/components/grid/grid";
import Photo from '@/components/photo/photo';
import photos from '@/components/photos';
import getMetaData from '@/components/utils/getMetaData';
import VerticallyAlignedDiv from '@/components/utils/verticallyAlignedDiv';
import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '../components/nav/nav';
import { permanentRedirect } from 'next/navigation'

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