import Badge from "../common/Badge"
import Button from "../common/Button"
import { FiInfo } from "react-icons/fi"
import { useState } from "react"

const AnalyticsCard = () => {
  const [selectedCoupon, setSelectedCoupon] = useState("WELCOME20")

  return (
    <div className="w-full xl:w-[360px] flex flex-col gap-5">

      <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-[0_8px_30px_rgb(0,0,0,0.05)] hover:shadow-[0_10px_35px_rgb(0,0,0,0.08)] transition-all duration-300">

        <h2 className="text-2xl font-semibold mb-5">
          Order Summary
        </h2>

        <div className="border border-gray-300 rounded-xl p-5">

          <div className="flex justify-between">

            <div>

              <h2 className="text-4xl font-bold">
                ₹4,999
                <span className="text-base font-normal">
                  /month
                </span>
              </h2>

              <p className="text-sm text-gray-500 mt-2">
                Includes 5,000 credits/mo.
              </p>

            </div>

            <div className="text-right">

              <Badge text="Selected Plan" />

              <h3 className="font-semibold mt-2">
                Startup
              </h3>

            </div>

          </div>

        </div>

        <Button
          variant="outline"
          className="
    w-full
    mt-5
    rounded-full
    border-blue-200
    text-blue-600
    bg-blue-50
    hover:bg-blue-100
    py-3
    font-semibold
    shadow-sm
    flex items-center justify-center gap-2
  "
        >
          <FiInfo className="text-sm" />
          Upgrade to Growth Plan
        </Button>

      </div>

      <div className="bg-white rounded-2xl border border-gray-200 p-6">

        <div className="
  border border-gray-300
  rounded-lg
  p-4
  flex items-center justify-between
  transition-all duration-300
  hover:border-blue-300
  hover:shadow-md
  hover:scale-[1.01]
">

          <div>

            <h3 className="font-medium text-sm">
              Wallet Balance
            </h3>

            <p className="text-xs text-gray-500">
              ₹500.00 available
            </p>

          </div>

          <Button variant="outline" className="py-2">
            Apply
          </Button>

        </div>

        <div className="mt-6">

          <h3 className="font-medium mb-4">
            Apply Coupon
          </h3>

          <div className="flex gap-2 mb-4">

            <input
              type="text"
              placeholder="Enter coupon code"
              className="flex-1 border border-gray-300 rounded-md px-4 py-3 outline-none text-sm"
            />

            <Button variant="outline">
              Apply
            </Button>

          </div>

          <div className="flex flex-col gap-3">

            {/* WELCOME20 */}

            <div
              onClick={() => setSelectedCoupon("WELCOME20")}
              className={`
      rounded-lg
      p-4
      flex items-center justify-between
      cursor-pointer
      transition-all duration-300
      hover:shadow-md
      hover:scale-[1.01]

      ${selectedCoupon === "WELCOME20"
                  ? "border border-blue-600 bg-blue-50"
                  : "border border-gray-300 bg-white"
                }
    `}
            >

              <div>

                <h3 className="font-semibold text-sm">
                  WELCOME20
                </h3>

                <p className="text-xs text-gray-500 mt-1">
                  20% off on your first month
                </p>

              </div>

              <div
                className={`w-5 h-5 rounded-full border-2 transition-all duration-300 ${selectedCoupon === "WELCOME20"
                    ? "border-blue-600 bg-blue-600"
                    : "border-gray-400"
                  }
      `}
              ></div>

            </div>

            <div
              onClick={() => setSelectedCoupon("ANNUAL50")}
              className={`
                        rounded-lg
                        p-4
                        flex items-center justify-between
                        cursor-pointer
                        transition-all duration-300
                        hover:shadow-md
                        hover:scale-[1.01]
                        
                        ${selectedCoupon === "ANNUAL50"
                          ? "border border-blue-600 bg-blue-50" 
                          : "border border-gray-300 bg-white"
                }`}>

              <div>

                <h3 className="font-semibold text-sm">
                  ANNUAL50
                </h3>

                <p className="text-xs text-gray-500 mt-1">
                  50% off on annual plans
                </p>

              </div>

              <div
                className={`w-5 h-5 rounded-full border-2 transition-all duration-300

        ${selectedCoupon === "ANNUAL50"
                    ? "border-blue-600 bg-blue-600"
                    : "border-gray-400"
                  }
      `}
              ></div>

            </div>

          </div>

        </div>

        <div className="border-t border-gray-200 pt-6 mt-8">

          <div className="flex justify-between mb-4">

            <p className="text-sm text-gray-500">
              Subtotal
            </p>

            <p className="font-medium">
              ₹14,999.00
            </p>

          </div>

          <div className="flex justify-between mb-6">

            <p className="text-sm text-gray-500">
              Tax (18% GST)
            </p>

            <p className="font-medium">
              ₹1,079.64
            </p>

          </div>

          <div className="flex justify-between items-center">

            <h2 className="text-lg font-semibold">
              Total due today
            </h2>

            <h1 className="text-3xl font-bold text-blue-600">
              16,078.64
            </h1>

          </div>

        </div>

        <Button className="w-full mt-8">
          Proceed to Payment
        </Button>

      </div>

    </div>
  )
}

export default AnalyticsCard