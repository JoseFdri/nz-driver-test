export const Button = ({ text }) => {
    return (
        <button
        className="middle none center rounded-lg bg-blue-700 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-700/20 transition-all hover:shadow-lg hover:shadow-blue-700/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        data-ripple-light="true"
        >
            {text}
        </button>
    )
}
