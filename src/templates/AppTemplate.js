import Header from "components/layout/header";
import HeaderDrawer from "components/layout/headerDrawer";

const AppTemplate = ({ children }) => {
    return (
        <>
            <Header />
            <HeaderDrawer />
            {children}
        </>
    );
};

export default AppTemplate;