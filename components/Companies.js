import STEMTank from "./STEMTank.png";
import Calibaba from "./Calibaba.png";
import planetscale from "./planetscale.png"

export default function Companies() {
    return (
      <div className="bg-gray-300">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <p className="text-center text-base font-semibold uppercase text-gray-600 tracking-wider">
            Learn More About My Projects!
          </p>
          <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img
                className="max-h-12"
                src={STEMTank}
                alt="STEMTank"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img className="max-h-12" src={Calibaba} alt="Calibaba" />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img className="max-h-12" src={planetscale} alt="PlanetScale" />
            </div>
          </div>
        </div>
      </div>
    )
  }