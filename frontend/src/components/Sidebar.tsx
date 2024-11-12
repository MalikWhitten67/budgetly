export default function Sidebar({children}) {
    return (
        <div className="flex flex-row gap-5 justify-between h-screen">
            <ul className="menu bg-base-200 sm:hidden  text-base-content min-h-full w-80 p-4">
                    {/* Sidebar content here */}
                    <li><a>Sidebar Item 1</a></li>
                    <li><a>Sidebar Item 2</a></li>
                </ul>
            <div className="text-start mt-5 sm:p-5">
                {children}
            </div>
            <ul className="menu bg-base-200 sm:hidden    text-base-content min-h-full w-80 p-4">
                    {/* Sidebar content here */}
                    <li><a>Sidebar Item 1</a></li>
                    <li><a>Sidebar Item 2</a></li>
                </ul>
        </div>
    )
}