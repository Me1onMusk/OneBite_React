import Button from "./Button";

const Header = () => {

    const buttonProps = {
        text : "메일", 
        color : "red",
        a : 1,
        b : 2,
        c : 3
    }

    return (
      <header>
        <h1>-Header-</h1>
            <Button {...buttonProps} />
            <Button text = {"카페"} />
            <Button text = {"블로그"}>
                <div>자식요소</div>
            </Button>
        <h1>---</h1>
      </header>
    );
  };

export default Header;