public abstract class Abstract {

    public abstract void reuiredopeartion1();
    public abstract void reuiredopeartion2();

    public void baseop1 () 
    {
        System.out.println("AbstractClass:Base operation 1 is implemented");
    } 
    public void baseop2() {System.out.println("AbstractClass:Base operation 2 is implemented");} 
    public void specifiedOPeration1()  {System.out.println("AbstractClass:Specified operation 1 is implemented");} 
    public void specifiedOPeration2()  {System.out.println("AbstractClass:Specified operation 1 is implemented");}
    boolean hook1(){
        return true;
    }
    
    boolean hook2(){
        return true;
    }


    public void templateMethod(){
        baseop1();
        reuiredopeartion1();
        if(hook1()){
            specifiedOPeration1();
        }
        baseop2();
        if(hook2()){
            specifiedOPeration2();
        }
    }
}



// Make 3 Concrete classes : 
// concreteClass1 : hook1() true hook2() false
// concreteClass2 : hook1() false hook2() true
// concreteClass2 : hook1() false hook2() false

class concreteClass1 extends Abstract{
public void reuiredopeartion1(){
    System.out.println("ConcreteClass1:Required operation 1 is implemented");
}

public void reuiredopeartion2(){
    System.out.println("ConcreteClass1:Required operation 2 is implemented");
}

boolean hook2(){
    return false;
}
}

class concreteClass2 extends Abstract{
public void reuiredopeartion1(){
    System.out.println("ConcreteClass2:Required operation 1 is implemented");
}

public void reuiredopeartion2(){
    System.out.println("ConcreteClass2:Required operation 2 is implemented");
}

boolean hook1(){
    return false;
}
}

class concreteClass3 extends Abstract{
public void reuiredopeartion1(){
    System.out.println("ConcreteClass3:Required operation 1 is implemented");
}

public void reuiredopeartion2(){
    System.out.println("ConcreteClass3:Required operation 2 is implemented");
}
boolean hook1(){
    return false;
}

boolean hook2(){
    return false;
}
}
