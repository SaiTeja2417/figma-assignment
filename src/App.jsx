import LayoutWrapper from "./components/layout/LayoutWrapper"
import AnalyticsCard from "./components/dashboard/AnalyticsCard"
import DataTable from "./components/dashboard/DataTable"

function App() {

  return (
    <LayoutWrapper>
      <div className="
        flex
        flex-col
        xl:flex-row
        gap-8
        items-start
      ">
        <div className="w-full">
          <DataTable />
        </div>

        <div className="
          w-full
          xl:w-auto
        ">
          <AnalyticsCard />
        </div>

      </div>

    </LayoutWrapper>
  )
}

export default App