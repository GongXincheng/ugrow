import org.junit.Test;

public class Test1 {

    @Test
    public void admin(){
        String x = "abc";
        String y = "abc";
        String z = new String("abc");

        System.out.println(x==y); //true
        System.out.println(x==z); //false
        System.out.println(y==z); //false
        System.out.println(x.equals(z)); //true
    }

    public static void main(String[] args) {

        for(int i = 1; i <= 100; i++){
            if(i % 3 == 0 || i % 5 == 0){
                if(i % 3 == 0 && i % 5 == 0){
                    System.out.println("c");
                    continue;
                }
                if(i % 3 == 0){
                    System.out.println("a");
                    continue;
                }
                System.out.println("b");
                continue;
            }
            System.out.println(i);
        }


    }


}
