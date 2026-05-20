import SearchBar from "../common/SearchBar"
import Button from "../common/Button"

import { FiMenu } from "react-icons/fi"

const Header = () => {

  return (
    <header className="
      bg-white
      border-b border-gray-200
      px-4 md:px-6
      py-4
      flex items-center justify-between
      gap-4
      sticky top-0 z-50
    ">

      <div className="flex-1 max-w-md">
        <SearchBar />
      </div>

      <div className="flex items-center gap-3">

        <Button className="
          hidden sm:flex
          bg-yellow-400
          text-black
          hover:bg-yellow-500
        ">
          Upgrade
        </Button>

        <Button className="
          text-xs
          sm:text-sm
        ">
          + Create Campaign
        </Button>

        <button className="
          w-10 h-10
          rounded-full
          border border-gray-300
          flex items-center justify-center
          hover:bg-gray-100
          transition-all duration-300
        ">
          <FiMenu />
        </button>

      </div>

    </header>
  )
}

export default Header