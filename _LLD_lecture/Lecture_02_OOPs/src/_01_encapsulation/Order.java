package _01_encapsulation;

import java.util.ArrayList;
import java.util.Collections;                               // new
import java.util.List;

class Order {
    static final int MAX_ITEMS = 20;

    private final List<MenuItem> items = new ArrayList<>();

    void addItem(MenuItem item) {
        if (items.size() >= MAX_ITEMS) {
            throw new IllegalStateException("An order can have at most " + MAX_ITEMS + " items");
        }
        items.add(item);
    }

    double getTotalAmount() {
        double total = 0;
        for (MenuItem item : items) {
            total += item.getPrice();
        }
        return total;
    }

    List<MenuItem> getItems() {
        return Collections.unmodifiableList(items);         // new
    }
}