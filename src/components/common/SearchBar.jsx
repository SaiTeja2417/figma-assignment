import { FiSearch } from "react-icons/fi"

const SearchBar = () => {

  return (
    <div className="relative w-full">

      <FiSearch
        className="
          absolute
          left-4
          top-1/2
          -translate-y-1/2
          text-gray-400
        "
      />

      <input
        type="text"
        placeholder="Find influencers to collaborate with"
        className="
          w-full
          border border-gray-300
          rounded-md
          py-3
          pl-11
          pr-4
          bg-white
          outline-none
          text-sm
          transition-all duration-300
          focus:border-blue-500
          focus:ring-4
          focus:ring-blue-100
        "
      />

    </div>
  )
}

export default SearchBar