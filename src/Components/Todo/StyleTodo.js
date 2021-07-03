import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyleTodoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  height: 280px;
  width: 230px;

}
`;

  //background: url(https://media.gettyimages.com/videos/4k-blue-abstract-blocks-background-stock-video-video-id1152050638?s=640x640) no-repeat;
  // background-size: auto;
  // background-size: cover;
export const StyleTodoImage = styled.div`
  height: 230px;
  width: 300px;
  background-color: #3a0ca3;
  position: absolute;
  border-radius: 50%;
  margin-left: -44px;
  margin-top: -110px;
  transition: .3s cubic-bezier(.3, 0, 0, 1.3);
}
`;

export const StyleTodoTitle = styled.h2`
  text-align: center;
  margin-top: 150px;
  position: absolute;
  z-index: 9999;
  font-size: 14px;
  color: #3a0ca3;
  width: 100%;
  font-family: sans-serif;
  transition: .3s cubic-bezier(.3, 0, 0, 1.3);
`;
export const StyleTodoDate = styled.div`
  text-align: center;
  margin-top: 190px;
  position: absolute;
  z-index: 9999;
  font-size: 9px;
  color: #1d3557;
  width: 100%;
  font-family: sans-serif;
  transition: .3s cubic-bezier(.3, 0, 0, 1.3);
`;
export const StyleTodo = styled.div`
  background-color: #fff;
  height: 250px;
  width: 220px;
  border-radius: 25px;
  margin: 10px 10px;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.3);
  overflow: hidden;
  transition: .3s cubic-bezier(.3, 0, 0, 1.3);
  position: relative;
  overflow: hidden;
  &:hover {
    box-shadow: 0px 30px 30px rgba(0,0,0,0.2);
    height: 260px;
    width: 210px;
    transition: .3s cubic-bezier(.3, 0, 0, 1.3);
    ${StyleTodoImage} {
      margin-left: -44px;
      margin-top: -40px;
      border-radius: 50px;
      transition: .3s cubic-bezier(.3, 0, 0, 1.3);
    }
    ${StyleTodoTitle}{
      margin-top: 110px;
      color: #fff;
      transition: .3s cubic-bezier(.3, 0, 0, 1.3);
    }
    ${StyleTodoDate}{
      margin-top: 170px;
      color: #fff;
      transition: .3s cubic-bezier(.3, 0, 0, 1.3);
    }
  }

}
`;

export const StyleTodoType = styled.h5`
  text-align: center;
  margin-top: 20px;
  position: absolute;
  z-index: 9999;
  font-size: 14px;
  color: white;
  width: 100%;
  font-family: sans-serif;
`;
export const StyleTodoState = styled.div`
  text-align: center;
  margin-top: 210px;
  position: absolute;
  z-index: 9999;
  font-size: 14px;
  color: #3a0ca3;
  width: 100%;
  font-family: sans-serif;
`;
export const Detail = styled(Link)`
  display: block;
  width: 100%;
  height: 190px;
  margin-top: 0px;
  position: absolute;
  z-index: 9999;
`;