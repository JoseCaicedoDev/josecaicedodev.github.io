import { BiWorld } from 'react-icons/bi'
import { BsGithub, BsReverseLayoutTextSidebarReverse } from 'react-icons/bs'

import imgFace from '/src/assets/foto_person.jpeg'

export const person = {
  name: 'Jose Caicedo',
  username: '@jcaicedo',
  description:
    'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.',
  imageSrc: imgFace,
  imageAlt: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
  logo: '',
  logoAlt: 'logo de la brand',
  networkSocial: [
    {
      title: 'instagram',
      href: 'https://twitter.com/mouredev',
    },
    {
      title: 'twitter',
      href: 'https://twitter.com/mouredev',
    },
  ],
  link: [
    {
      iconImg: <BiWorld className="mr-2 w-5 h-5" />,
      titleName: 'Mi sitio web',
      href: '#',
      type: 'btn-primary',
    },
    {
      iconImg: <BsReverseLayoutTextSidebarReverse className="mr-2 w-5 h-5" />,
      titleName: 'Curriculum',
      href: 'https://jose.caicedo.dev/hv-html',
      type: 'btn-secondary',
    },
    {
      iconImg: <BsGithub className="mr-2 w-5 h-5" />,
      titleName: 'GitHub',
      href: 'https://github.com/JoseCaicedoDev',
      type: 'btn-third',
    },
  ],
}
