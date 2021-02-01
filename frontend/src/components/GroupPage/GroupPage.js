import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import { groupInfo } from "../../store/group";

const GroupPage = () => {
    const dispatch = useDispatch();

    const groupId = Number.parseInt(useParams().groupId);

    const group = useSelector(state => state.group);

    useEffect(() => {
        dispatch(groupInfo(groupId));
        console.log('use effect running')
    }, [dispatch, groupId]);

    if (!group) {
        return null;
    }

    return (
        <>
            <h1>Group: {group.GroupName}</h1>
            <>
                <p>{group.GroupDescription}</p>
            </>
        </>
    )
}

export default GroupPage;
