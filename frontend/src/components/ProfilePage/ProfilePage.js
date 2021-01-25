import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userInfo } from "../../store/session";

const ProfilePage = () => {
    const dispatch = useDispatch();

    const user = useSelector(state => state.session.user);

    useEffect(() => {
        dispatch(userInfo(user.id))
    }, [dispatch]);

    return (
        <div>
            <p>hey {user.username}</p>
        </div>
    )
};

export default ProfilePage
