import { FormEvent, useState } from "react";
import ListInput from "../components/ListInput";
import Fields from "../data/fields-item.json";
import NavigationBar from "../components/NavigationBar";

export default function NewAd() {
  // Local state
  const [form, setForm] = useState({});

  // Properties
  const METHOD = "POST";
  const HEADERS = { "Content-type": "application/json; charset=UTF-8" };
  const endPoint = "http://localhost:9000/auctions/create";

  // Methods
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    var item = { ...form };

    event.preventDefault();
    console.log(item);
    fetch(endPoint, {
      method: METHOD,
      headers: HEADERS,
      body: JSON.stringify(item),
    })
      .then(onSuccess)
      .catch((error) => onFailure(error));
  }

  function onSuccess() {
    alert("Item created!");
  }

  function onFailure(error: string) {
    console.error(error);
    alert("Could not create item");
  }

  return (
    <div id="new-ad">
      <NavigationBar />
      <div id="form-section">
        <h1>Create new ad</h1>
        <form className="form" onSubmit={onSubmit}>
          <h1>What do you want to sell?</h1>
          <ListInput fields={Fields} state={[form, setForm]} />
          <hr />
          <button className="button-green">Create ad</button>
        </form>
      </div>
    </div>
  );
}
