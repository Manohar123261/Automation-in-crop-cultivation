import java.util.ArrayList;
class Pizza {
     String size;
     String crustType;
     ArrayList<String> toppings;

    public Pizza(String size, String crustType, ArrayList<String> toppings) {
        this.size = size;
        this.crustType = crustType;
        this.toppings = toppings;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public String getCrustType() {
        return crustType;
    }

    public void setCrustType(String crustType) {
        this.crustType = crustType;
    }

    public ArrayList<String> getToppings() {
        return toppings;
    }

    public void setToppings(ArrayList<String> toppings) {
        this.toppings = toppings;
    }

    @Override
    public String toString() {
        return "Pizza{" +
                "size='" + size + '\'' +
                ", crustType='" + crustType + '\'' +
                ", toppings=" + toppings +
                '}';
    }
}

class CheesePizza extends Pizza {
    public CheesePizza(String size, String crustType) {
        super(size, crustType, new ArrayList<>());
    }
}

class MeatPizza extends Pizza {
    private String meatType;

    public MeatPizza(String size, String crustType, String meatType) {
        super(size, crustType, new ArrayList<>());
        this.meatType = meatType;
    }

    public String getMeatType() {
        return meatType;
    }

    public void setMeatType(String meatType) {
        this.meatType = meatType;
    }

    @Override
    public String toString() {
        return "MeatPizza{" +
                "size='" + size + '\'' +
                ", crustType='" + crustType + '\'' +
                ", toppings=" + toppings +
                ", meatType='" + meatType + '\'' +
                '}';
    }
}

public class Main {
    public static void main(String[] args) {
        CheesePizza cheesePizza = new CheesePizza("medium", "thin");
        MeatPizza meatPizza = new MeatPizza("large", "thick", "pepperoni");

        System.out.println(cheesePizza.toString());
        System.out.println(meatPizza);
    }
}