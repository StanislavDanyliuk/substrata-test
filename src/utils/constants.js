import WalletPage from "../Pages/WalletPage";
import BuyPage from "../Pages/BuyPage";
import SellPage from "../Pages/SellPage";
import PricePage from "../Pages/PricePage";

export const sidebarMenuItems = [
    {
        label: 'My wallet',
        path: '/wallet',
        component: <WalletPage/>
    },
    {
        label: 'Buy Bitcoin',
        path: '/buy',
        component: <BuyPage/>
    },
    {
        label: 'Sell Bitcoin',
        path: '/sell',
        component: <SellPage/>
    },
    {
        label: 'Bitcoin Price',
        path: '/bitcoin',
        component: <PricePage/>
    },
]
