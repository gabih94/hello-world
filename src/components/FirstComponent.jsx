import MyComponent from "./MyComponent";
import TemplateExpressions from "./TemplateExpressions";

const FirstComponent = () => {

  return (
    <div className="lista">
      <h3>Lista Animais</h3>
      <TemplateExpressions/>
      <MyComponent/>
    </div>
  );
};

export default FirstComponent;