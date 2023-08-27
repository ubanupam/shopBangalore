const SearchCartUser = () => {
    return (
        <div className="flex items-center space-x-4 sm:space-x-6">
            <button className="p-2 focus:none">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <g clipPath="url(#clip0_9156_951)">
                        <rect width="24" height="24" fill="white" />
                        <circle cx="11.1953" cy="10.1924" r="6.5" transform="rotate(45 11.1953 10.1924)" stroke="black" />
                        <rect x="16.0234" y="14.3145" width="7" height="1" rx="0.5" transform="rotate(45 16.0234 14.3145)" fill="black" />
                    </g>
                    <defs>
                        <clipPath id="clip0_9156_951">
                            <rect width="24" height="24" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </button>

            <button className="hover:stroke-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="15" viewBox="0 0 24 15" fill="none">
                    <path d="M23.5 1C23.5 1 22.3904 1.56982 21.2075 5.07013C20.2946 7.77146 19.3023 11.6218 18.8968 13.2388C18.7846 13.6865 18.3833 14 17.9218 14H12H6.07821C5.61668 14 5.21542 13.6865 5.10317 13.2388C4.69773 11.6218 3.70544 7.77146 2.79251 5.07013C1.60957 1.56982 0.5 1 0.5 1" stroke="black" strokeLinecap="round" />
                </svg>
            </button>

            <button className="text-gray-600 hover:text-gray-800 hidden lg:block">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <g clipPath="url(#clip0_9156_956)">
                        <rect width="24" height="24" fill="white" />
                        <circle cx="12.5" cy="8" r="3" stroke="black" />
                        <path d="M6 19.1924C6 15.6025 8.91015 12.6924 12.5 12.6924C16.0899 12.6924 19 15.6025 19 19.1924" stroke="black" strokeLinecap="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_9156_956">
                            <rect width="24" height="24" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </button>
        </div>

    );
}

export default SearchCartUser