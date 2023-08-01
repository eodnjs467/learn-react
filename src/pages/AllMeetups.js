import MeetupList from "../components/meetups/MeetupList";
import {useEffect, useState} from "react";

function AllMeetupsPage() {
  const [loadMeetups, setLoadMeetups] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('https://react-meetup-15869-default-rtdb.firebaseio.com/meetups.json')
        .then((res) => {
          if(res.ok){
            return res.json();
          }
        })
        .then((data) => {
          setLoading(false);
          const meetups = [];
          for(const key in data) {
            const meetup = {
              id: key,
              ...data[key],
            };
            meetups.push(meetup);
          }
          setLoadMeetups(meetups);
        })
  }, []);

  if (loading){
    return(
        <section>
          <p>Loading...</p>
        </section>
    )
  }

  return (
      <section>
        <h1>All Meetups</h1>
        <MeetupList meetups={loadMeetups}/>
      </section>
  );
}

export default AllMeetupsPage;
