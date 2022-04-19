import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { actionUser } from "../redux-config/actions/userActions";
import { selectorUserData } from "../redux-config/selectors/userSelectors";

export const User = (props) => {

    const dispatch = useDispatch();

    const user = useSelector(selectorUserData);

    useEffect(() => {
        console.log({ props });
        const id = props?.match?.params?.id || undefined
        if (id) {
            dispatch(actionUser.request(id))
        }
    }, [props]);



    return (
        <div>
            Dettaglio utente! {props.match.params.id || ''}
            {user && <>
                <pre>{JSON.stringify(user, null, 2)}</pre>
            </>}
        </div>
    )
}