import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import useChronometer from '../components/Hooks/useChronometer'

configure({ adapter: new Adapter() })
