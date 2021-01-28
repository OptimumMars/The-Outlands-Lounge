import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import { userInfo } from "../../store/profile";

const ProfilePage = () => {
    const dispatch = useDispatch();

    const userId = Number.parseInt(useParams().userId);

    const user = useSelector(state => state.profile);

    useEffect(() => {
        dispatch(userInfo(userId))
    }, [dispatch]);

    return (
        <div>
            <p>hey {user.username}</p>
        </div>
    )
};

export default ProfilePage
