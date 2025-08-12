---
{"dg-publish":true,"permalink":"/quadratic-equations/"}
---

[[Home\|Home]]

>[!Attention]- This is an experimental page.
>Topics may have been discussed but rely on official topics that have been covered.

# Quadratic Equation

A quadratic equation is a second-degree polynomial equation in a single variable x, with a standard form:
$$ax^2 + bx + c = 0$$
where a, b, and c are real (or complex) constants with $$a \neq 0$$

| Overview  |                                |
| --------- | ------------------------------ |
| Degree    | 2                              |
| Unknowns  | One variable (commonly x)      |
| Solutions | Up to two                      |
| Graph     | $$ y = ax^2+bx+c $$ (parabola) |
| Forms     |                                |
| Standard Form    | $$ ax^2+bx+c = 0 $$            |



# Solution methods

## Factoring:
  • If the quadratic factors over the integers or rationals:
    $$ax^2 + bx + c = a(x - r_1)(x - r_2)$$
    Solutions: $$x = r_1, \; x = r_2$$
    
---

• Completing the square:
  • Rewrite $$ax^2 + bx + c = 0$$ with $$a \neq 0$$ as:
    $$x^2 + \frac{b}{a}x + \frac{c}{a} = 0$$
    $$x^2 + \frac{b}{a}x = -\frac{c}{a}$$
    Add $$\left(\frac{b}{2a}\right)^2$$ to both sides:
    $$\left(x + \frac{b}{2a}\right)^2 = \frac{b^2 - 4ac}{4a^2}$$
    Hence:
    $$x + \frac{b}{2a} = \pm \frac{\sqrt{b^2 - 4ac}}{2a}$$
    $$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$
    
---

• Quadratic formula:
  $$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

---

• Graphing:
  • Intersections of $$y = ax^2 + bx + c$$ with the x-axis give the real solutions.

# Discriminant
The discriminant of the quadratic equation is:
$$\Delta = b^2 - 4ac$$

• If $$\Delta > 0$$: two distinct real roots
• If $$\Delta = 0$$: one real root with multiplicity two (a repeated root)
• If $$\Delta < 0$$: two complex conjugate roots


# Derivation of the quadratic formula

Starting from $$ax^2 + bx + c = 0$$ with $$a \neq 0$$
- Divide by a:
  $$x^2 + \frac{b}{a}x + \frac{c}{a} = 0$$
- Complete the square:
  $$\left(x + \frac{b}{2a}\right)^2 = \frac{b^2 - 4ac}{4a^2}$$
- Take square roots and solve for x:
  $$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

# Special cases

• Monic quadratic:
  • When $$a = 1$$:
    $$x^2 + bx + c = 0$$
    Roots satisfy:
    $$r_1 + r_2 = -b, \quad r_1 r_2 = c$$

• Perfect square:
  • When $$b^2 = 4ac$$:
    $$x = -\frac{b}{2a}$$ (double root)

• Pure quadratic:
  • When $$b = 0$$:
    $$ax^2 + c = 0 \Rightarrow x = \pm \sqrt{-\frac{c}{a}}$$

• Missing constant term:
  • When $$c = 0$$:
    $$ax^2 + bx = x(ax + b) = 0 \Rightarrow x = 0 $$
    $$\text{ or } x = -\frac{b}{a}$$

# Graphical interpretation

- The function $$y = ax^2 + bx + c$$ is a parabola.
- x-intercepts: solutions to $$ax^2 + bx + c = 0$$ (if real)
- y-intercept: at $$x = 0$$, so $$y = c$$
- Vertex at $$x = -\frac{b}{2a}$$ with minimum or maximum value $$y_v = c - \frac{b^2}{4a}$$ depending on the sign of a.

# Historical notes

Quadratic equations were studied by Babylonian mathematicians as early as 2000 BCE. Systematic methods including completing the square appear in works by Al-Khwarizmi (c. 9th century). The quadratic formula in its modern symbolic form developed with algebraic notation in the Renaissance.

# See also

