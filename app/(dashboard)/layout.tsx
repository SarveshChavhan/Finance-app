import { Children } from "react"
import { Header } from "./header";

type Props={
    children:React.ReactNode;

}
const DahsboardLayout=({ children }: Props)=>{
    return (
        <>
        <Header/>
        <main className="px-3 lg:px-14">
            {children}
        </main>
        </>

    );
}

export default DahsboardLayout;