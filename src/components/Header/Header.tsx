import logo from '../../assets/Logo.svg'

export function Header(){

    return(
    <header className="bg-gray700 min-h-[200px] flex items-center justify-center">
        <img src={logo} alt="" />
    </header>
    )
}