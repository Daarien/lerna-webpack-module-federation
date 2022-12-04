import { useEffect } from "react";
import { inject, observer } from "mobx-react";
import { makeStyles } from "library";
// import store from "../../store/Dogs";
import { StoreProps } from "../../store";
import styles from "./Dogs.style";

const useStyles = makeStyles(styles);

interface Props extends StoreProps<"dogs"> {}

function Dogs({ dogs }: Props) {
  const classes = useStyles();
  async function getAllBreeds() {
    dogs.getBreeds();
  }
  useEffect(() => {
    getAllBreeds();
  }, []);
  return (
    <div>
      <p>
        <span className={classes.btn}>Button</span>
      </p>
      {Object.keys(dogs.breeds).map((breed) => (
        <span key={breed}>{breed}</span>
      ))}
    </div>
  );
}

Dogs.defaultProps = {} as StoreProps<"dogs">;

export default inject("dogs")(observer(Dogs));
