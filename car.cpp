#include <thread>
#include <iostream>
#include <chrono>
#include <vector>
using namespace::std;

class Car{
    private: static int LEFT_END; static int RIGHT_END; int SPEED; bool DIRECTION; int LOCATION; int NEXT_NODE; bool FLAG;
    public:
    Car(int speed, int direction, int location, int next_node, bool flag){
        this->SPEED = speed; this->DIRECTION = direction; this->LOCATION = location; this->NEXT_NODE = next_node; this->FLAG = flag; 
    }
    static void initializeEnds(int left, int right){
        LEFT_END = left; RIGHT_END = right;
    }
    int getNextLocation(int time){
        return this->LOCATION*time;
    }
    void setLocation(int location){
        this->LOCATION = location;
    }
    int getspeed()
    {
        return this->SPEED;
    }
    int getLocation(){
        return this->LOCATION;
    }
    void changeDirection(){
        this->DIRECTION = this->DIRECTION==0?1:0;
    }
    int getDirection(){
        return this->DIRECTION;
    }
    bool isEnd(){
        if(this->LOCATION>=RIGHT_END) return 1;
        else if(this->LOCATION<=LEFT_END) return 1;
        else return 0;
    }
};

void run(Car c, int counter, int sleeptime){
    int i=0, loc;
    while (i<counter)
    {
        if(c.isEnd()) {
            c.changeDirection();
            // cout<<"direction: "<<c.getDirection()<<endl;
            // break;
        }
        cout<<std::this_thread::get_id()<<"\t";
        std::this_thread::sleep_for(std::chrono::milliseconds(sleeptime));
        loc = c.getLocation();
        cout<<loc<<endl;
        if(c.getDirection()==1) c.setLocation(++loc);
        else c.setLocation(--loc);
        i++;
    }
    cout<<std::this_thread::get_id()<<"\tended"<<endl;
}
int getpulse(std::vector<Car> cars)
{
    //Function to find shortest rate in milliseconds
    float maxspeed =cars[0].getspeed();
    for(int i =1;i<cars.size();i++)
    {
        if(cars[i].getspeed()>maxspeed)
            maxspeed=cars[i].getspeed();
    }
    return (1/maxspeed)*1000;
    return maxspeed;
}

int Car::LEFT_END;
int Car::RIGHT_END;

int main(){
    Car::initializeEnds(0,100);
    Car car1 = Car(2,1,95,5,0);
    Car car2 = Car(2,0,2,5,0);
    //for calculation of shortest time
    vector<Car> v1;
    v1.push_back(car1);
    v1.push_back(car2);
    int refresh_rate=getpulse(v1);

    thread th1(&run, car1, 10, refresh_rate);
    thread th2(&run, car2, 5, refresh_rate);
    th1.join();
    th2.join();
    cout<<"END";
    return 0;
}
