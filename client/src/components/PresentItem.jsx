import React, { useState } from 'react';
import PresentsDiscussions from './PresentsDiscussions.jsx'
import { Img, SectionContainer, ActionsContainer, Title, Actions, Discussions, Btn, Likes, Dislikes, ReadMore, ActNow, ProfilePic, DiscussionBody, UserContainer, userName } from './styles/Shared.style';

const PresentItem = ({ present }) => {
  const [isLike, setIsLike] = useState(false);
  const [isDislike, setIsDislike] = useState(false);

  const updateLikes = () => {
    if (!isLike) {
      setIsLike(true);
      present.likes++;
    }
  }
  const updateDislikes = () => {
    if (!isDislike) {
      setIsDislike(true);
      present.dislikes++;
    }
  }

  return (
    <SectionContainer >
      <Img src={present.image} />
        <Title>
           <div>{present.title}</div>
        </Title>
        <Actions>
          <ActionsContainer>
            <Likes onClick={updateLikes}>LIKE BY HER |  {present.likes}</Likes>
            <Dislikes onClick={updateDislikes}>DISLIKE BY HER | {present.dislikes}</Dislikes>
            <ReadMore>
                <a href={present.moreDetails}>Read More</a>
            </ReadMore>
            <ActNow>
              <a href={present.reference}>Purchase NOW</a>
            </ActNow>
          </ActionsContainer>
        </Actions>
        <Discussions>
          {present.discussions.map((discussion) => (
            <PresentsDiscussions discussion={discussion} key={discussion.discussion_id}/>
            )
          )}
          {/* <AddDestination /> */}
        </Discussions>
    </SectionContainer>
  )
}

export default PresentItem;