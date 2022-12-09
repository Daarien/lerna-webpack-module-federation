import { useState, useEffect } from "react";
import { inject, observer } from "mobx-react";
import { List, ListItem, makeStyles } from "@mf/flamingo";
import { StoreProps } from "store";
import styles from "./Dogs.style";

const useStyles = makeStyles(styles);

interface Props extends StoreProps<"dogs"> {}

function Dogs({ dogs }: Props) {
  const classes = useStyles();

  const [breeds, setBreeds] = useState<string[]>([]);

  useEffect(() => {
    const breeds = Object.keys(dogs.breeds);
    setBreeds(breeds);
  }, [dogs.breeds]);

  async function getAllBreeds() {
    dogs.getBreeds();
  }

  function handleClick() {
    getAllBreeds();
  }

  return (
    <div>
      <p>
        <span className={classes.btn} onClick={handleClick}>
          Get dogs breeds
        </span>
      </p>
      <List>
        {breeds.map(breed => (
          <ListItem key={breed}>{breed}</ListItem>
        ))}
      </List>
    </div>
  );
}

Dogs.defaultProps = {} as StoreProps<"dogs">;

export default inject("dogs")(observer(Dogs));
