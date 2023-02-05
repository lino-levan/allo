import { useState } from "preact/hooks";

export default function AddMoney(props: {
  child_key: string;
  balance: number;
}) {
  const [bonus, setBonus] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <>
      <p class="text-2xl text-gray-600">
        Current Balance:{" "}
        <span class={props.balance < 10 ? "text-red-500" : ""}>
          {currencyFormatter.format(props.balance + bonus)}
        </span>
      </p>
      <div class="flex flex-wrap gap-4">
        {[10, 20, 50, 100].map((amount) => (
          <button
            disabled={disabled}
            class="border px-4 py-2 rounded hover:bg-gray-50 disabled:bg-gray-100"
            onClick={() => {
              setDisabled(true);
              fetch("/app/api/set_balance", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  balance: props.balance + bonus + amount,
                  child_key: props.child_key,
                }),
              }).then(() => {
                setDisabled(false);
              });
              setBonus(bonus + amount);
            }}
          >
            {currencyFormatter.format(amount)}
          </button>
        ))}
      </div>
    </>
  );
}
