// Layouts
import DefaultLayout from "../../../layouts/default";

// Sections
import ModulesSection from "../../../sections/modules/modulesSection";


function ModulesScreen() {

  return (
    <div className="App">
      <DefaultLayout>
        
        {/* <!-- Best Result section --> */}
        <ModulesSection/>

      </DefaultLayout>
    </div>
  );
}

export default ModulesScreen;