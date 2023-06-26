import backgroundImage from './vercel.svg'
export default function FormLayout({ children }) {

    const style = {
        backgroundColor: 'red',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundWidth: '100%',

    }
    return (
        <div className=" h-screen" style={style}>{children}</div>
    )
}