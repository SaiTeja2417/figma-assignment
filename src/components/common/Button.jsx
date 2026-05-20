const Button = ({
    children,
    variant = "primary",
    className = "",
}) => {

    const variants = {

        primary:
            "bg-blue-600 text-white hover:bg-blue-700 hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-xl",

        secondary:
            "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 hover:scale-[1.02]",

        outline:
            "border border-blue-300 text-blue-600 bg-white hover:bg-blue-50 hover:border-blue-500 hover:shadow-md hover:scale-[1.01]",
    }

    return (
        <button
            className={`
        px-5 py-3 rounded-md text-sm font-medium
        transition-all duration-300 ease-in-out
        ${variants[variant]}
        ${className}
      `}
        >
            {children}
        </button>
    )
}

export default Button