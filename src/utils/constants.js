import WalletPage from "../Pages/WalletPage";
import BuyPage from "../Pages/BuyPage";
import SellPage from "../Pages/SellPage";
import PricePage from "../Pages/PricePage";

export const sidebarMenuItems = [
    {
        label: 'My wallet',
        path: '/wallet',
        page: <WalletPage/>
    },
    {
        label: 'Buy Bitcoin',
        path: '/buy',
        page: <BuyPage/>
    },
    {
        label: 'Sell Bitcoin',
        path: '/sell',
        page: <SellPage/>
    },
    {
        label: 'Bitcoin Price',
        path: '/bitcoin',
        page: <PricePage/>
    },
]



export const historyActions = [
    {
        date: new Date(Date.now()).toLocaleString(),
        actionType: 'Purchased 1 Bitcoin'
    },
]
