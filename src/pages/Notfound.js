import {Result} from "antd";
import {Link} from "react-router-dom";

const Notfound = () => {
    return (
        <div>
            <Result
                status="404"
                title="404"
                subTitle="La dirreccion no existe."
                extra={<Link to="/">Regresar a inicio</Link>}
            />
        </div>
    );
};

export default Notfound;
