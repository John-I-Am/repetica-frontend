/* eslint-disable import/no-extraneous-dependencies */
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ActionIcon, Tooltip } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import { clearUser } from '../../reducers/userReducer';
import { clearDeck } from '../../reducers/deckReducer';
import { clearActiveDeck } from '../../reducers/activeDeckReducer';

import navIconLearn from '../../assets/navIconLearn.svg';
import navIconEdit from '../../assets/navIconEdit.svg';
import navIconProfile from '../../assets/navIconProfile.svg';
import navIconExit from '../../assets/navIconExit.svg';

import { Container, Logout } from './styles';

const SideBar = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { hovered, ref } = useHover();
  const { hovered: hovered2, ref: ref2 } = useHover();
  const { hovered: hovered3, ref: ref3 } = useHover();
  const { hovered: hovered4, ref: ref4 } = useHover();

  const handleLogout = async () => {
    window.localStorage.removeItem('currentUser');
    dispatch(clearActiveDeck());
    dispatch(clearUser());
    dispatch(clearDeck());
    history.push('/');
  };

  return (
    <Container>

      <NavLink to="/dashboard">
        <div ref={ref}>
          <Tooltip opened={!!hovered} label="Learn" withArrow>
            <ActionIcon>
              <img src={navIconLearn} alt="learn" />
            </ActionIcon>
          </Tooltip>
        </div>
      </NavLink>

      <NavLink to="/deck">
        <div ref={ref2}>
          <Tooltip opened={!!hovered2} label="Edit" withArrow>
            <ActionIcon>
              <img src={navIconEdit} alt="learn" />
            </ActionIcon>
          </Tooltip>
        </div>
      </NavLink>

      <NavLink to="/profile">
        <div ref={ref3}>
          <Tooltip opened={!!hovered3} label="Profile" withArrow>
            <ActionIcon>
              <img src={navIconProfile} alt="learn" />
            </ActionIcon>
          </Tooltip>
        </div>
      </NavLink>

      <Logout onClick={handleLogout} ref={ref4}>
        <Tooltip opened={!!hovered4} label="Logout" withArrow>
          <ActionIcon title="blahblah">
            <img src={navIconExit} alt="exit" />
          </ActionIcon>
        </Tooltip>
      </Logout>

    </Container>
  );
};

export default SideBar;
