import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import { userInfo } from "../../store/profile";

const ProfilePage = () => {
    const dispatch = useDispatch();

    const userId = Number.parseInt(useParams().userId);

    const user = useSelector(state => state.profile);

    let legends = useSelector((state) => {
        if (user.Groups !== undefined) {
            let userLegends = (state.profile.UserLegends)
            let legendArr = [];
            for (const [key, value] of Object.entries(userLegends)) {
                if (value === true) {
                    legendArr.push(key)
                }
            }
            return legendArr;
        }
    })

    useEffect(() => {
        dispatch(userInfo(userId))
        // console.log('use effect running')
    }, [dispatch, userId]);

    // const groupCheck = (jsx) => {
    //     if (user.Groups === undefined) {
    //         return null;
    //     } else {
    //         return jsx;
    //     }
    // }

    if (!user) {
        return null;
    }

    // if (user.Groups !== undefined) {
    //     console.log(user.Groups)
    // }

    return (
        <div>
            <h2>hey {user.username}</h2>
            <>
                <h3>Your Main Legends:</h3>
                <ul>
                    {user.Groups !== undefined ?
                        (legends.map((legend) => {
                            return (
                                <li key={legend}>
                                    <p>{legend}</p>
                                </li>
                            )
                        })) : (<p>no Legends yet!</p>)
                    }
                </ul>
            </>
            <>
                <h3>Your Groups:</h3>
                <ul>
                    {user.Groups !== undefined ?
                        (user.Groups.map((group) => {
                            return (
                                <li key={group.id}>
                                    <p>{group.GroupName}</p>
                                    <p>{group.Description}</p>
                                </li>
                            )
                        })) : (<p>no groups yet!</p>)
                    }
                </ul>
            </>
            <>
                <h3>Your Events:</h3>
                <ul>
                    {user.Groups !== undefined ?
                        (user.Groups.map((group) => {
                            return (
                                <li key={group.id}>
                                    <p>Group: {group.GroupName}</p>
                                    {group.GroupEvents.map((event) => {
                                        return (
                                            <p>Event on (Date)</p>
                                        )
                                    })}
                                </li>
                            )
                        })) : (<p>no events yet!</p>)
                    }
                </ul>
            </>
        </div>
    )
};

export default ProfilePage
