import Button from "../common/Button"
import { FiArrowLeft } from "react-icons/fi"

const DataTable = () => {

    return (
        <>
            <div className="
  flex items-center
  gap-2
  text-gray-500
  text-sm
  font-medium
  mb-8
  cursor-pointer
  hover:text-blue-600
  transition-all duration-300
  w-fit
">

                <FiArrowLeft className="text-base" />

                <span>
                    Back to plans
                </span>

            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-8 flex-1 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_10px_40px_rgb(0,0,0,0.08)] transition-all duration-300">


                <h1 className="text-3xl font-semibold text-gray-900 mb-8">
                    Review your details
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="flex flex-col gap-2">

                        <label className="text-sm font-medium">
                            Company Name
                        </label>

                        <input
                            type="text"
                            placeholder="Example"
                            className="
                        border border-gray-300
  rounded-md
  px-4
  py-3
  outline-none
  transition-all
  duration-300
  focus:border-blue-500
  focus:ring-4
  focus:ring-blue-100
  hover:border-gray-400
  "
                        />

                    </div>

                    <div className="flex flex-col gap-2">

                        <label className="text-sm font-medium">
                            Email
                        </label>

                        <input
                            type="text"
                            placeholder="example@gmail.com"
                            className=" border border-gray-300 rounded-md px-4 py-3 outline-none transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 hover:border-gray-400
                        "
                        />

                    </div>

                    <div className="flex flex-col gap-2">

                        <label className="text-sm font-medium">
                            GST Number (Optional)
                        </label>

                        <input
                            type="text"
                            placeholder="GST Number"
                            className="
                        border border-gray-300
                        rounded-md
                        px-4
                        py-3
                        outline-none
                        transition-all
                        duration-300
                        focus:border-blue-500
                        focus:ring-4
                        focus:ring-blue-100
                        hover:border-gray-400
                        "
                        />

                    </div>

                    <div className="flex flex-col gap-2">

                        <label className="text-sm font-medium">
                            PAN Number (Optional)
                        </label>

                        <input
                            type="text"
                            placeholder="PAN Number"
                            className="
                        border border-gray-300
                        rounded-md
  px-4
  py-3
  outline-none
  transition-all
  duration-300
  focus:border-blue-500
  focus:ring-4
  focus:ring-blue-100
  hover:border-gray-400
  "
                        />

                    </div>

                    <div className="flex flex-col gap-2">

                        <label className="text-sm font-medium">
                            Premise/House no.
                        </label>

                        <input
                            type="text"
                            placeholder="Premise/House no."
                            className="
                        border border-gray-300
                        rounded-md
                        px-4
                        py-3
                        outline-none
                        transition-all
                        duration-300
                        focus:border-blue-500
                        focus:ring-4
                        focus:ring-blue-100
                        hover:border-gray-400
                        "
                        />

                    </div>

                    <div className="flex flex-col gap-2">

                        <label className="text-sm font-medium">
                            Street
                        </label>

                        <input
                            type="text"
                            placeholder="Street"
                            className="
                        border border-gray-300
                        rounded-md
                        px-4
                        py-3
                        outline-none
                        transition-all
                        duration-300
                        focus:border-blue-500
                        focus:ring-4
                        focus:ring-blue-100
                        hover:border-gray-400
                        "
                        />

                    </div>

                    <div className="flex flex-col gap-2">

                        <label className="text-sm font-medium">
                            State
                        </label>

                        <select className="
  border border-gray-300
  rounded-md
  px-4
  py-3
  outline-none
  transition-all
  duration-300
  focus:border-blue-500
  focus:ring-4
  focus:ring-blue-100
  hover:border-gray-400
  ">

                            <option>Select State</option>
                            <option>Telangana</option>
                            <option>Karnataka</option>

                        </select>

                    </div>

                    <div className="flex flex-col gap-2">

                        <label className="text-sm font-medium">
                            City
                        </label>

                        <select className="
  border border-gray-300
  rounded-md
  px-4
  py-3
  outline-none
  transition-all
  duration-300
  focus:border-blue-500
  focus:ring-4
  focus:ring-blue-100
  hover:border-gray-400
  ">

                            <option>Select City</option>
                            <option>Hyderabad</option>
                            <option>Bangalore</option>

                        </select>

                    </div>

                    <div className="flex flex-col gap-2">

                        <label className="text-sm font-medium">
                            Country
                        </label>

                        <input
                            type="text"
                            placeholder="India"
                            className="
                        border border-gray-300
                        rounded-md
                        px-4
                        py-3
                        outline-none
                        transition-all
                        duration-300
                        focus:border-blue-500
                        focus:ring-4
                        focus:ring-blue-100
                        hover:border-gray-400
                        "
                        />

                    </div>

                    <div className="flex flex-col gap-2">

                        <label className="text-sm font-medium">
                            Pin Code
                        </label>

                        <input
                            type="text"
                            placeholder="Pincode"
                            className="
                        border border-gray-300
                        rounded-md
                        px-4
                        py-3
                        outline-none
                        transition-all
                        duration-300
                        focus:border-blue-500
                        focus:ring-4
                        focus:ring-blue-100
                        hover:border-gray-400
                        "
                        />

                    </div>

                </div>

                <div className="flex flex-col sm:flex-row justify-end gap-4 mt-10">

                    <Button variant="secondary">
                        Cancel
                    </Button>

                    <Button>
                        Save Details
                    </Button>

                </div>

            </div>
        </>
    )
}

export default DataTable