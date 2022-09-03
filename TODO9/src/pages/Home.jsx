import SectionAlgoritimo from "../components/SectionAlgoritimo/SectionAlgoritimo";
import SectionCompartilhe from "../components/SectionCompartilhe/SectionCompartilhe";
import Selection from "../components/Selection/Selection";

export default function Home(){
    return(
        <div className="Home">
            <SectionAlgoritimo/>
            <Selection />
            <SectionCompartilhe />
        </div>
    )
}