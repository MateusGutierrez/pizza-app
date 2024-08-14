import { HomeIcon, NotebookPenIcon, NotebookText, ShoppingCart, Pizza, LogInIcon, UserPlus2Icon} from 'lucide-react'

interface Route {
    title: string;
    link: string;
    icon: React.FC;
  }

export const HeaderTriggerRoutes:Route[]  = [
    {
        title: 'Home',
        link: `/`,
        icon: HomeIcon
    },
    {
        title: 'Cardápio',
        link: `/ui/products`,
        icon: NotebookText,

    },
    {
        title: 'Monte seu pedido',
        link: `/ui/order`,
        icon: NotebookPenIcon
    },
    {
        title: 'Carrinho',
        link: '/ui/cart',
        icon: ShoppingCart,
    },
    {
        title: 'Sobre nós',
        link: '/ui/about',
        icon: Pizza,
    },
    {
        title: 'Login',
        link: '/ui/login',
        icon: LogInIcon,

    },
    {
        title: 'Cadastre-se',
        link: '/ui/register',
        icon: UserPlus2Icon
    }
]
