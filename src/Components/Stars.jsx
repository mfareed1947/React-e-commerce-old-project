import React from 'react'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { AiOutlineStar } from 'react-icons/ai'
import styled from 'styled-components'

const Stars = ({ reviews, stars }) => {

    const ratingStar = Array.from({ length: 5 }, (elem, ind) => {
        let numbers = ind + 0.5;

        return (
            // ind = 0,ind = 1,ind = 2,ind = 3,ind = 4
            <span key={ind} >
                {
                    stars >= ind + 1 ?
                        (<FaStar className='icon' />)
                        : stars >= numbers ? (<FaStarHalfAlt className='icon' />)
                            : (<AiOutlineStar className='icon' />)
                }
            </span>


        );
    })

    return (
        <Wrapper>
            <div className="icon-style">
                {ratingStar}
                <p>({reviews} customer reviews)</p>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
  .icon-style {
    display: flex;
    gap: 0.2rem;
    align-items: center;
    justify-content: flex-start;
    .icon {
      font-size: 2rem;
      color: orange;
    }
    .empty-icon {
      font-size: 2.6rem;
    }
    p {
      margin: 0;
      padding-left: 1.2rem;
    }
  }
`;

export default Stars