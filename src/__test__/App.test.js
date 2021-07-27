import { shallow, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { useChronometer } from "../components/Hooks/useChronometer";
configure({ adapter: new Adapter() });

describe("<useChronometer/>", () => {
  test("should change the state of start", () => {
    const TestComponent = (props) => {
      const hook = props.hook();
      return <div {...hook}></div>;
    };
    const wrapper = shallow(<TestComponent hook={useChronometer} />);
    let props = wrapper.find("div").props();
    props.started();
    props = wrapper.find("div").props();
    expect(props.start).toEqual(true);
  });
  test("it should change the start and stop state as well as reset the chronometer", () => {
    const TestComponent = (props) => {
      const hook = props.hook();
      return <div {...hook}></div>;
    };
    const wrapper = shallow(<TestComponent hook={useChronometer} />);
    let props = wrapper.find("div").props();
    props.finalize();
    props = wrapper.find("div").props();
    expect(props.start).toEqual(false);
    expect(props.stop).toEqual(false);
    expect(props.timeStatus).toEqual({
      h: 0,
      m: 0,
      s: 0,
      ms: 0,
    });
  });
  test("should change the state of stop to true", () => {
    const TestComponent = (props) => {
      const hook = props.hook();
      return <div {...hook}></div>;
    };
    const wrapper = shallow(<TestComponent hook={useChronometer} />);
    let props = wrapper.find("div").props();
    props.stopped();
    props = wrapper.find("div").props();
    expect(props.stop).toEqual(true);
  });
  test("should change the state of stop to false", () => {
    const TestComponent = (props) => {
      const hook = props.hook();
      return <div {...hook}></div>;
    };
    const wrapper = shallow(<TestComponent hook={useChronometer} />);
    let props = wrapper.find("div").props();
    props.resume();
    props = wrapper.find("div").props();
    expect(props.stop).toEqual(false);
  });
  test("should reset the chronometer and change the state of stop to false", () => {
    const TestComponent = (props) => {
      const hook = props.hook();
      return <div {...hook}></div>;
    };
    const wrapper = shallow(<TestComponent hook={useChronometer} />);
    let props = wrapper.find("div").props();
    props.clear();
    props = wrapper.find("div").props();
    expect(props.timeStatus).toEqual({
      h: 0,
      m: 0,
      s: 0,
      ms: 0,
    });
    expect(props.stop).toEqual(true);
  });
});
