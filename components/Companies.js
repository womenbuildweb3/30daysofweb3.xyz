export default function Companies() {
    return (
      <div className="bg-gray-500">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <p className="text-center text-base font-semibold uppercase text-white tracking-wider">
            Learn More About My Projects!
          </p>
          <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                <a                     
                target="_blank"
                rel="noreferrer" 
                href="www.stemtank.org">
              <img
              height="140px" width="140px" 
                src="/STEMTank.png"
                alt="STEMTank"
              />
              </a>
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                <a  href="www.calibaba.com">
              <img height="60px" width="140px"  src="/Calibaba.png" alt="Calibaba" />
              </a>
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                <a  href="www.planetscale.com">
              <img height="110px" width="130px" src="/planetscale.png" alt="PlanetScale" />
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }