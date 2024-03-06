import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function HomePage() {
  return (
    <>
      <section
        id="home"
        className="container w-full h-screen justify-center flex-col items-center"
      >
        <div className="flex w-full h-full justify-between items-center">
          <div className="flex w-12 h-12 rounded-full items-center justify-center bg-gray-200">
            <button>
              <FontAwesomeIcon icon={faArrowRight} className="w-5 rotate-180" />
            </button>
          </div>
          <div className="flex w-12 h-12 rounded-full items-center justify-center bg-gray-200">
            <button>
              <FontAwesomeIcon icon={faArrowRight} className="w-5" />
            </button>
          </div>
        </div>
        <div className="flex w-full h-fill justify-center items-center">
          <div className="flex w-34 h-10 lg:w-44 lg:h-14 rounded-lg justify-center items-center bg-gray-700">
            <button className="text-xs">READ MORE</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
