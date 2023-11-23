import { permanentRedirect } from 'next/navigation'

function NotFoundPage() {
  permanentRedirect('/')
}

export default NotFoundPage